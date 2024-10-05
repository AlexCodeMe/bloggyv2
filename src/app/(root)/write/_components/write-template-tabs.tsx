'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { templates } from "@/lib/constants";
import Link from "next/link";
import React, { useState } from "react";

export default function WriteTemplateTabs() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

  return (
    <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue={templates[0].id} onValueChange={(value) => {
            const selectedTemplate = templates.find(t => t.id === value);
            if (selectedTemplate) {
                setSelectedTemplate(selectedTemplate);
            }
        }}>
          <TabsList className="grid w-full grid-cols-3">
            {templates.map((template) => (
              <TabsTrigger key={template.id} value={template.id}>{template.title}</TabsTrigger>
            ))}
          </TabsList>
          {templates.map((template) => (
            <TabsContent key={template.id} value={template.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="p-4 bg-muted rounded-md overflow-auto max-h-96">
                    <code>{template.preview}</code>
                  </pre>
                </CardContent>
                <CardFooter>
                  <Link href={`/write/new?template=${template.id}`} passHref>
                    <Button className="w-full">Use This Template</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
  )
}
