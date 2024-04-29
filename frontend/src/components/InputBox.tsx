import { memo } from "react";



type iInputBox={
    placeholder:string
    type:string
    label:string
    id:string
    onChange?:(e:any)=>void
}




function InputBox(props: iInputBox) {
  return (
    <div>
      <label htmlFor={props.id} className="text-base font-medium text-gray-900">
        {" "}
        {props.label}{" "}
      </label>
      <div className="mt-2">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
}

export default memo(InputBox);
