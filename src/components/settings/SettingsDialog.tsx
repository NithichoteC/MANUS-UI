
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SettingsIcon } from "@/components/icons";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

interface SettingsFormValues {
  openAIKey: string;
  openRouterKey: string;
}

export const SettingsDialog = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  // Initialize form with values from localStorage if available
  const form = useForm<SettingsFormValues>({
    defaultValues: {
      openAIKey: localStorage.getItem("openAIKey") || "",
      openRouterKey: localStorage.getItem("openRouterKey") || "",
    },
  });

  const onSubmit = (data: SettingsFormValues) => {
    // Save API keys to localStorage
    localStorage.setItem("openAIKey", data.openAIKey);
    localStorage.setItem("openRouterKey", data.openRouterKey);
    
    toast({
      title: "Settings saved",
      description: "Your API keys have been saved successfully.",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Configure your API keys for various services.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="openAIKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OpenAI API Key</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="sk-..."
                      type="password"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="openRouterKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OpenRouter API Key</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="sk-or-..."
                      type="password"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex justify-end pt-4">
              <Button type="submit">Save Settings</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
