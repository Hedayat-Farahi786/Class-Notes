import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { v4 as uuidv4 } from "uuid";
import db from "../firebase";
import firebase from "firebase";

const TextEditor = ({ bc, sbc, username, img }) => {
  const [input, setTyping] = useState("");
  const [text, setText] = useState("");
  const handleEditorChange = (content, editor) => {
    setText(content);
  };
  function convertDate() {
    // Time
    let time = new Date().toLocaleTimeString();
    let x = time.split(":");
    let finalTime = x[0] + ":" + x[1] + " " + time[time.length - 2] + time[time.length - 1];

    // Date
    let date = new Date().toString();
    let res = date.split(" ");
    let finalDate = res[0] + " " + " " + res[2] + " " + res[1] + " " + res[3];

    return finalTime + " - " + finalDate;
  }
  return (
    <div className="textEditor">
      <input type="text" className="titleInput" placeholder="Note Title..." value={input} onChange={(e) => setTyping(e.target.value)} />
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
      <button
        onClick={(e) => {
          e.preventDefault();
          let collection = "";
          const myParam = window.location.href;
          const res = myParam.split("/");
          const final = res[res.length - 1];
          switch (final) {
            case "businessCommunication":
              collection = "firstNote";
              break;
            case "modernProgrammingLanguage":
              collection = "secondNote";
              break;
            case "visualProgramming":
              collection = "thirdNote";
              break;
            case "compOrgAndAssemblyLanguage":
              collection = "fourthNote";
              break;
            case "dataStructureAndAlgorithm":
              collection = "fifthNote";
              break;
          }
          console.log(collection);
          db.collection(collection).add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            id: uuidv4(),
            username: username,
            time: convertDate(),
            img: img,
            title: input,
            text: text,
          });
          setTyping("");
        }}
        className="addNote"
      >
        Add Note <i className="fa fa-plus" style={{ marginLeft: "10px" }}></i>
      </button>
    </div>
  );
};

export default TextEditor;
