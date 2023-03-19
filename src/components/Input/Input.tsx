import React, { FunctionComponent, useEffect, useState } from "react";
import { useFocusNext } from "../../hooks/focusNext.hook";
import { BadgeGroup } from "../BadgeGroup/BadgeGroup";
import { Tag } from "../Tag/Tag";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | string[] | undefined;
  hint?: string;
}

export interface TagInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | string[] | undefined;
  hint?: string;
  onAdd?: (value: string[]) => void;
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | string[] | undefined;
  hint?: string;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <div className="flex-1 w-full">
      {props.label && (
        <label
          htmlFor={props.id}
          className="block text-xs font-bold leading-5 text-gray-800"
        >
          {props.label}
          {props.required && <b className="text-red-500">*</b>}
        </label>
      )}
      <div className="my-1 rounded-md shadow-sm w-full">
        <input
          className="appearance-none input block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          {...props}
        />
      </div>
      {props.hint && <div className="text-xs text-gray-500">{props.hint}</div>}
      {props.error && typeof props.error === "object" ? (
        props.error.map((err, i) => (
          <div key={i} className="text-xs text-red-500">
            {err}
          </div>
        ))
      ) : (
        <div className="text-xs text-red-500">{props.error}</div>
      )}
    </div>
  );
};

export const OTPInput: FunctionComponent<InputProps> = (props) => {
  const focusNext = useFocusNext();
  return (
    <div className="flex-1">
      {props.label && (
        <label
          htmlFor={props.id}
          className="block text-xs font-bold leading-5 text-gray-800"
        >
          {props.label}
          {props.required && <b className="text-red-500">*</b>}
        </label>
      )}
      <div className="flex flex-row items-center">
        <div className="my-1 rounded-md shadow-sm">
          <input
            className="appearance-none input block p-2 text-center border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-8 mx-1"
            min={1}
            max={1}
            required
            ref={focusNext}
          />
        </div>
        <div className="my-1 rounded-md shadow-sm">
          <input
            className="appearance-none input block p-2 text-center border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-8 mx-1"
            min={1}
            max={1}
            required
            ref={focusNext}
          />
        </div>
        <div className="my-1 rounded-md shadow-sm">
          <input
            className="appearance-none input block p-2 text-center border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-8 mx-1"
            min={1}
            max={1}
            required
            ref={focusNext}
          />
        </div>
        <div className="my-1 rounded-md shadow-sm">
          <input
            className="appearance-none input block p-2 text-center border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-8 mx-1"
            min={1}
            max={1}
            required
            ref={focusNext}
          />
        </div>
        <div className="my-1 rounded-md shadow-sm">
          <input
            className="appearance-none input block p-2 text-center border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-8 mx-1"
            min={1}
            max={1}
            required
            ref={focusNext}
          />
        </div>
        <div className="my-1 rounded-md shadow-sm">
          <input
            className="appearance-none input block p-2 text-center border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-8 mx-1"
            min={1}
            max={1}
            required
            ref={focusNext}
          />
        </div>
      </div>
      {props.hint && <div className="text-xs text-gray-500">{props.hint}</div>}
      {props.error && typeof props.error === "object" ? (
        props.error.map((err, i) => (
          <div key={i} className="text-xs text-red-500">
            {err}
          </div>
        ))
      ) : (
        <div className="text-xs text-red-500">{props.error}</div>
      )}
    </div>
  );
};

export const TextArea: FunctionComponent<TextAreaProps> = (props) => {
  return (
    <div className="flex-1">
      <label
        htmlFor={props.id}
        className="block text-xs font-bold leading-5 text-gray-800"
      >
        {props.label}
        {props.required && <b className="text-red-500">*</b>}
      </label>
      <div className="my-1 rounded-md shadow-sm">
        <textarea
          className="appearance-none input block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          {...props}
        />
      </div>
      {props.hint && <div className="text-xs text-gray-500">{props.hint}</div>}
      {props.error && typeof props.error === "object" ? (
        props.error.map((err, i) => (
          <div key={i} className="text-xs text-red-500">
            {err}
          </div>
        ))
      ) : (
        <div className="text-xs text-red-500">{props.error}</div>
      )}
    </div>
  );
};

export const TagInput: FunctionComponent<TagInputProps> = (props) => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (props.onAdd) {
      props.onAdd(tags);
    }
  }, [tags]);

  function handleInput(t: EventTarget) {
    const value = (t as HTMLInputElement).value;
    if (value.length > 0 && value.includes(",")) {
      setTags([
        ...tags,
        ...value
          .split(",")
          .map((tg) => tg.trim())
          .filter((tg) => tg.length > 0),
      ]);
      (t as HTMLInputElement).value = "";
    }
  }

  return (
    <div className="flex-1">
      {props.label && (
        <label
          htmlFor={props.id}
          className="block text-xs font-bold leading-5 text-gray-800"
        >
          {props.label}
          {props.required && <b className="text-red-500">*</b>}
        </label>
      )}

      {tags.length > 0 && (
        <div className="mt-1 mb-2">
          <BadgeGroup>
            {tags.map((tag, i) => (
              <Tag
                key={i}
                onClick={() => {
                  setTags(tags.filter((t) => t !== tag));
                }}
              >
                {tag}
              </Tag>
            ))}
          </BadgeGroup>
        </div>
      )}

      <div className="my-1">
        <input {...props} type="hidden" value={tags.join(",")} />
        <input
          placeholder={props.placeholder || "Add tags..."}
          className="appearance-none block p-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-500 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
          min={1}
          max={1}
          required
          onKeyUp={(e) => handleInput(e.target)}
        />
      </div>
      {props.hint && <div className="text-xs text-gray-500">{props.hint}</div>}
      {props.error && typeof props.error === "object" ? (
        props.error.map((err, i) => (
          <div key={i} className="text-xs text-red-500">
            {err}
          </div>
        ))
      ) : (
        <div className="text-xs text-red-500">{props.error}</div>
      )}
    </div>
  );
};
