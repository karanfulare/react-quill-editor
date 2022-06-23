
import { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    register("Content", { required: true, minLength: 11 });
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("Content", editorState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const editorContent = watch("Content");

  return (
    <div className="App">
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={onEditorStateChange}
      />
      <p className="Error">{errors.Content && "Enter valid content"}</p>
      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </div>
  );
}
