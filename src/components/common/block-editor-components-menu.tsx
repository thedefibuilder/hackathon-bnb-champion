"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconCaretUpDown } from "@tabler/icons-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type ComponentItem = {
  label: string;
  value: string;
  component: JSX.Element;
};

interface EditorComponentProps {
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
}

const EditorComponent = React.memo<EditorComponentProps>(
  ({ editorState, onEditorStateChange }) => (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={onEditorStateChange}
    />
  ),
);

export default function BlockEditorComponentsMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const [selectedComponents, setSelectedComponents] = useState<JSX.Element[]>(
    [],
  );
  const [editorStates, setEditorStates] = useState<Record<string, EditorState>>(
    {
      "item-1-editor": EditorState?.createEmpty(),
      "item-2-editor": EditorState?.createEmpty(),
    },
  );

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleEditorStateChange = useCallback(
    (key: string) => (state: EditorState) => {
      if (isMounted.current) {
        setEditorStates((prevState) => ({
          ...prevState,
          [key]: state,
        }));
      }
    },
    [],
  );

  const handleSelectComponent = (currentValue: string) => {
    const selectedComponent = components.find(
      (component) => component.value === currentValue,
    );

    if (selectedComponent) {
      setSelectedComponents((prev) => [...prev, selectedComponent.component]);
      setValue(currentValue);
      setOpen(false);
    }
  };

  const components: ComponentItem[] = [
    {
      label: "Avatar",
      value: "avatar",
      component: (
        <div className="rounded border p-4">
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/150" alt="Avatar" />
            <AvatarFallback>
              <EditorComponent
                editorState={
                  editorStates["item-1-editor"] || EditorState?.createEmpty()
                }
                onEditorStateChange={handleEditorStateChange("item-1-editor")}
              />
            </AvatarFallback>
          </Avatar>
        </div>
      ),
    },
    {
      label: "Button",
      value: "button",
      component: <Button>Button</Button>,
    },
    {
      label: "Input",
      value: "input",
      component: <input className="border p-2" placeholder="Input field" />,
    },
    {
      label: "Accordion",
      value: "accordion",
      component: (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Editor 1</AccordionTrigger>
            <AccordionContent>
              <div className="editor-container">
                <EditorComponent
                  editorState={
                    editorStates["item-1-editor"] || EditorState?.createEmpty()
                  }
                  onEditorStateChange={handleEditorStateChange("item-1-editor")}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Editor 2</AccordionTrigger>
            <AccordionContent>
              <div className="editor-container">
                <EditorComponent
                  editorState={
                    editorStates["item-2-editor"] || EditorState?.createEmpty()
                  }
                  onEditorStateChange={handleEditorStateChange("item-2-editor")}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
  ];

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Editor 1</AccordionTrigger>
          <AccordionContent>
            <div className="editor-container">
              <EditorComponent
                editorState={
                  editorStates["item-1-editor"] || EditorState?.createEmpty()
                }
                onEditorStateChange={handleEditorStateChange("item-1-editor")}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Editor 2</AccordionTrigger>
          <AccordionContent>
            <div className="editor-container">
              <EditorComponent
                editorState={
                  editorStates["item-2-editor"] || EditorState?.createEmpty()
                }
                onEditorStateChange={handleEditorStateChange("item-2-editor")}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-1/2 justify-between"
          >
            {value
              ? components.find((component) => component.value === value)?.label
              : "Select component..."}
            <IconCaretUpDown stroke={2} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[740px] p-0">
          <Command>
            <CommandInput placeholder="Search component..." />
            <CommandList>
              <CommandEmpty>No component found.</CommandEmpty>
              <CommandGroup>
                {components.map((component) => (
                  <CommandItem
                    key={component.value}
                    value={component.value}
                    onSelect={() => handleSelectComponent(component.value)}
                  >
                    {component.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <div className="mt-4 space-y-4">
        {selectedComponents.map((Component, index) => (
          <div key={index} className="rounded border p-4">
            {Component}
          </div>
        ))}
      </div>
    </>
  );
}
