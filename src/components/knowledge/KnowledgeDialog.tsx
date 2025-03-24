
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
import { BookIcon, PlusIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

// Knowledge item interface
interface KnowledgeItem {
  id: string;
  name: string;
  trigger: string;
  content: string;
  enabled: boolean;
}

// New knowledge form values
interface NewKnowledgeFormValues {
  name: string;
  trigger: string;
  content: string;
}

export const KnowledgeDialog = () => {
  const [open, setOpen] = useState(false);
  const [newKnowledgeOpen, setNewKnowledgeOpen] = useState(false);
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
  
  // Setup form for new knowledge
  const form = useForm<NewKnowledgeFormValues>({
    defaultValues: {
      name: "",
      trigger: "",
      content: "",
    },
  });

  const onSubmit = (data: NewKnowledgeFormValues) => {
    // Create new knowledge item
    const newItem: KnowledgeItem = {
      id: Date.now().toString(),
      name: data.name,
      trigger: data.trigger,
      content: data.content,
      enabled: true,
    };
    
    // Add to knowledge items
    setKnowledgeItems([...knowledgeItems, newItem]);
    
    // Reset form and close popup
    form.reset();
    setNewKnowledgeOpen(false);
    
    toast({
      title: "Knowledge added",
      description: "Your knowledge item has been added successfully.",
    });
  };

  const toggleKnowledgeStatus = (id: string) => {
    setKnowledgeItems(
      knowledgeItems.map(item => 
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Knowledge Base">
            <BookIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px] bg-sidebar border-sidebar-border">
          <DialogHeader>
            <DialogTitle className="text-sidebar-foreground flex items-center justify-between">
              <span>Knowledge Base</span>
              <Popover open={newKnowledgeOpen} onOpenChange={setNewKnowledgeOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    size="sm" 
                    className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                  >
                    <PlusIcon className="h-4 w-4 mr-1" /> Add Knowledge
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] bg-sidebar border-sidebar-border">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-sidebar-foreground">Add New Knowledge</h3>
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
                            Add Knowledge
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </PopoverContent>
              </Popover>
            </DialogTitle>
            <DialogDescription className="text-sidebar-foreground/70">
              Manage AI knowledge for contextual responses
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-2">
            {knowledgeItems.length === 0 ? (
              <div className="text-center py-8 text-sidebar-foreground/60">
                No knowledge items added yet
              </div>
            ) : (
              <div className="space-y-3">
                {knowledgeItems.map((item) => (
                  <div key={item.id} className="flex items-start justify-between p-3 bg-sidebar-accent rounded-md border border-sidebar-border">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sidebar-foreground">{item.name}</h4>
                      <p className="text-xs text-sidebar-foreground/70 max-w-[380px] truncate">
                        Trigger: {item.trigger}
                      </p>
                      <p className="text-xs text-sidebar-foreground/70 max-w-[380px] truncate">
                        {item.content}
                      </p>
                    </div>
                    <Switch 
                      checked={item.enabled} 
                      onCheckedChange={() => toggleKnowledgeStatus(item.id)}
                      className="ml-2 mt-1"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
