import React from "react";
import WriteTemplateTabs from "./_components/write-template-tabs"

export default function WritePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Blog Template
            </h1>
            <p className="text-xl mb-6">
              Kickstart your writing with our AI-powered templates. Select the
              perfect structure for your next masterpiece.
            </p>
          </div>
        </div>
      </section>
      <WriteTemplateTabs />
    </div>
  );
}
