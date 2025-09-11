"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav-links";

export function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <div className="flex items-center justify-center gap-4 mb-4 lg:hidden">
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative hover:bg-transparent p-0 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <div className="relative flex h-8 w-4 items-center justify-center">
                            <div className="relative size-4">
                                <span className={`bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 ${open ? "top-1.5 -rotate-45" : "top-1"}`}></span>
                                <span className={`bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 ${open ? "top-1.5 rotate-45" : "top-2.5"}`}></span>
                            </div>
                        </div>
                        <span className="flex h-8 items-center text-lg leading-none font-medium">Menu</span>
                    </Button>
                </PopoverTrigger>
            </div>

            <PopoverContent
                side="bottom"
                align="start"
                className="inset-0 w-screen h-screen rounded-none border-none bg-background/90 backdrop-blur p-0 overflow-y-auto shadow-none"
            >
                <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-2xl font-medium">{link.name}</a>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}