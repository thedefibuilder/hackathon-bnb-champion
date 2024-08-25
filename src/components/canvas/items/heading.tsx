import React, { useState } from "react";
import { Editor, EditorState, ContentState } from "react-draft-wysiwyg";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { TCanvasForm } from "@/lib/canvas-item";

export type TControlledFormFileInput<TFormSchema extends FieldValues> = {
  id: string;
};

export default function HeadingItem<TFormSchema extends FieldValues>({
  id,
}: TControlledFormFileInput<TFormSchema>) {
  const { control, setValue, watch } = useFormContext<TCanvasForm>();
  const headingItem = watch(id);

  const currentSettings = headingItem?.settings || { level: "h1", text: "" };
  const [editorState, setEditorState] = useState(() =>
    EditorState?.createEmpty(),
  );

  const handleEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);

    const contentState = newEditorState.getCurrentContent();
    const plainText = contentState.getPlainText();

    const selectionState = newEditorState.getSelection();
    const blockType = newEditorState
      .getCurrentContent()
      .getBlockForKey(selectionState.getStartKey())
      .getType();

    if (headingItem) {
      setValue(id, {
        ...headingItem,
        settings: {
          ...currentSettings,
          text: plainText,
          level: blockType,
        },
      });
    }
  };

  return (
    <div>
      <h2>Add Heading</h2>
      <div className="h-2" />
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <>
            <Editor
              editorState={editorState}
              toolbarClassName="my-toolbar-class"
              wrapperClassName="my-wrapper-class"
              editorClassName="my-editor-class"
              onEditorStateChange={handleEditorStateChange}
              toolbar={{
                options: ["inline", "blockType"],
                inline: { inDropdown: true },
                blockType: {
                  inDropdown: true,
                  options: ["H1", "H2", "H3", "H4", "H5", "H6"],
                },
              }}
            />
          </>
        )}
      />
    </div>
  );
}
