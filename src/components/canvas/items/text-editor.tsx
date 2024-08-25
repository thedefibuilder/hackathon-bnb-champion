import React, { useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { TCanvasForm, TCanvasItem } from "@/lib/canvas-item";
import { TControlledFormFileInput } from "./heading";
import { convertToRaw } from "draft-js";
import { EItemName } from "@/lib/items";

export default function TextEditorItem<TFormSchema extends FieldValues>({
  id,
}: TControlledFormFileInput<TFormSchema>) {
  const [editorState, setEditorState] = useState(EditorState?.createEmpty());
  const { control, setValue } = useFormContext<TCanvasForm>();

  const handleEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);

    const contentState = newEditorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    const text = contentState.getPlainText();
    const canvasItem: TCanvasItem = {
      id: id,
      component: (id: string) => <TextEditorItem id={id} />,
      itemName: EItemName.textEditor,
      settings: { text, content: rawContent },
    };
    setValue(id, canvasItem);
  };

  return (
    <div>
      <h2>Add Text</h2>
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
            />
          </>
        )}
      />
    </div>
  );
}
