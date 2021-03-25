import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TextEditor = () => {
  const [text, setText] = useState("");
  const handleEditorChange = (content, editor) => {
    setText(content);
  };
  return (
    <div className="textEditor">
      <input type="text" className="titleInput" placeholder="Note Title..." />
      <Editor
        initialValue="<p>Write your note here! 😊</p>"
        init={{
          plugins:
            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
          imagetools_cors_hosts: ["picsum.photos"],
          menubar: "file edit view insert format tools table help",
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
          toolbar_sticky: true,
          autosave_ask_before_unload: true,
          autosave_interval: "30s",
          autosave_prefix: "{path}{query}-{id}-",
          autosave_restore_when_empty: false,
          autosave_retention: "2m",
          templates: [
            {
              title: "New Table",
              description: "creates a new table",
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
            },
            { title: "Starting my story", description: "A cure for writers block", content: "Once upon a time..." },
            {
              title: "New list with dates",
              description: "New List with dates",
              content:
                '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
            },
          ],
          template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
          template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
          height: 500,
          width: 600,
          resize: false,
          image_caption: true,
          quickbars_selection_toolbar: "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
          noneditable_noneditable_class: "mceNonEditable",
          toolbar_mode: "sliding",
          contextmenu: "link image imagetools table",
          skin: "oxide-dark",
          content_css: "default",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
      <button onClick={() => console.log(text)} className="addNote">
        Add Note <i className="fa fa-plus" style={{ marginLeft: "10px" }}></i>
      </button>
    </div>
  );
};

export default TextEditor;
