
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/IconButton";
import { BookIcon, PlusIcon, ArrowLeftIcon, Pencil, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface KnowledgeItem {
  id: string;
  name: string;
  trigger: string;
  content: string;
  enabled: boolean;
}

interface KnowledgeFormValues {
  name: string;
  trigger: string;
  content: string;
}

export const KnowledgeDialog = () => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<'list' | 'add' | 'edit'>('list');
  const [editingItem, setEditingItem] = useState<KnowledgeItem | null>(null);
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>([
    {
      id: "1",
      name: "Product Information",
      trigger: "When user asks about our product",
      content: "Our product is a cutting-edge AI assistant that helps with various tasks.",
      enabled: true,
    },
    {
      id: "2",
      name: "Pricing Details",
      trigger: "When discussing pricing",
      content: "We offer three tiers: Basic ($10/mo), Pro ($25/mo), and Enterprise (custom pricing).",
      enabled: true,
    },
  ]);
  
  const { toast } = useToast();
  
  const form = useForm<KnowledgeFormValues>({
    defaultValues: {
      name: "",
      trigger: "",
      content: "",
    },
  });

  const onSubmit = (data: KnowledgeFormValues) => {
    if (view === 'add') {
      const newItem: KnowledgeItem = {
        id: Date.now().toString(),
        name: data.name,
        trigger: data.trigger,
        content: data.content,
        enabled: true,
      };
      
      setKnowledgeItems([...knowledgeItems, newItem]);
      
      toast({
        title: "Knowledge added",
        description: "Your knowledge item has been added successfully.",
      });
    } else if (view === 'edit' && editingItem) {
      setKnowledgeItems(
        knowledgeItems.map(item => 
          item.id === editingItem.id ? { 
            ...item, 
            name: data.name, 
            trigger: data.trigger, 
            content: data.content 
          } : item
        )
      );
      
      toast({
        title: "Knowledge updated",
        description: "Your knowledge item has been updated successfully.",
      });
    }
    
    form.reset();
    setView('list');
    setEditingItem(null);
  };

  const handleEdit = (item: KnowledgeItem) => {
    setEditingItem(item);
    form.reset({
      name: item.name,
      trigger: item.trigger,
      content: item.content,
    });
    setView('edit');
  };

  const handleDelete = (id: string) => {
    setKnowledgeItems(knowledgeItems.filter(item => item.id !== id));
    
    toast({
      title: "Knowledge deleted",
      description: "Your knowledge item has been deleted successfully.",
    });
  };

  const toggleKnowledgeStatus = (id: string) => {
    setKnowledgeItems(
      knowledgeItems.map(item => 
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };
  
  const handleOpenChange = (newOpenState: boolean) => {
    setOpen(newOpenState);
    if (!newOpenState) {
      setView('list');
      setEditingItem(null);
      form.reset();
    }
  };

  const getViewTitle = () => {
    switch (view) {
      case 'add':
        return "Add New Knowledge";
      case 'edit':
        return "Edit Knowledge";
      default:
        return "Knowledge Base";
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <IconButton 
          icon={<BookIcon className="text-sidebar-foreground" />} 
          aria-label="Knowledge Base"
          className="hover:bg-sidebar-accent"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-sidebar border-sidebar-border">
        <DialogHeader className="pr-12">
          <DialogTitle className="text-sidebar-foreground flex items-center justify-between">
            {view !== 'list' ? (
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mr-2 p-0 h-8 w-8"
                  onClick={() => {
                    setView('list');
                    setEditingItem(null);
                    form.reset();
                  }}
                >
                  <ArrowLeftIcon className="h-4 w-4 text-sidebar-foreground" />
                </Button>
                <span>{getViewTitle()}</span>
              </div>
            ) : (
              <>
                <span>Knowledge Base</span>
                <Button 
                  size="sm" 
                  className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                  onClick={() => setView('add')}
                >
                  <PlusIcon className="h-4 w-4 mr-1" /> Add Knowledge
                </Button>
              </>
            )}
          </DialogTitle>
          {view === 'list' && (
            <DialogDescription className="text-sidebar-foreground/70">
              Manage AI knowledge for contextual responses
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="space-y-4 mt-2">
          {view !== 'list' ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sidebar-foreground">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Knowledge name"
                          className="bg-sidebar-accent text-sidebar-foreground border-sidebar-border" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="trigger"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sidebar-foreground">When to use</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="When should this knowledge be used"
                          className="bg-sidebar-accent text-sidebar-foreground border-sidebar-border" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sidebar-foreground">Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Knowledge content"
                          className="min-h-[100px] bg-sidebar-accent text-sidebar-foreground border-sidebar-border" 
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button 
                    type="submit"
                    className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                  >
                    {view === 'add' ? 'Add Knowledge' : 'Update Knowledge'}
                  </Button>
                </div>
              </form>
            </Form>
          ) : (
            <>
              {knowledgeItems.length === 0 ? (
                <div className="text-center py-8 text-sidebar-foreground/60">
                  No knowledge items added yet
                </div>
              ) : (
                <div className="space-y-3">
                  {knowledgeItems.map((item) => (
                    <div key={item.id} className="flex items-start justify-between p-3 bg-sidebar-accent rounded-md border border-sidebar-border">
                      <div className="space-y-1 flex-1">
                        <h4 className="font-medium text-sidebar-foreground">{item.name}</h4>
                        <p className="text-xs text-sidebar-foreground/70 max-w-[350px] truncate">
                          Trigger: {item.trigger}
                        </p>
                        <p className="text-xs text-sidebar-foreground/70 max-w-[350px] truncate">
                          {item.content}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => handleEdit(item)}
                        >
                          <Pencil className="h-4 w-4 text-sidebar-foreground/70" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-sidebar-foreground/70" />
                        </Button>
                        <Switch 
                          checked={item.enabled}
                          onCheckedChange={() => toggleKnowledgeStatus(item.id)}
                          className="data-[state=checked]:bg-sidebar-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
