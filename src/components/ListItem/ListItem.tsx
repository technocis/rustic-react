import React, {
  forwardRef,
  FunctionComponent,
  ReactNode,
  useState,
} from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface IListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  text: string;
  subtext?: string;
  icon?: ReactNode;
  active?: boolean;
  menuItem?: boolean;
}

interface INestedListProps extends React.HTMLAttributes<HTMLUListElement> {
  text: string;
  collapsible?: boolean;
  titleType?: "item" | "heading";
}

export const ListItem: FunctionComponent<IListItemProps> = forwardRef<
  HTMLLIElement,
  IListItemProps
>(function ListItem(props, ref) {
  const { text, subtext, icon, active, menuItem, ...rest } = props;
  return (
    <li
      ref={ref}
      className={`py-1.5 px-3 my-0.5 rounded flex text-gray-800 hover:bg-gray-50 hover:text-purple-500 items-center cursor-pointer ${
        active ? "text-purple-500 bg-gray-50" : ""
      } ${menuItem ? "cursor-pointer text-sm font-medium" : ""}`}
      {...rest}
    >
      {icon && <span className="mr-3">{icon}</span>}
      <div className="flex flex-col items-start">
        <span>{text}</span>
        {subtext && <span className="text-xs">{subtext}</span>}
      </div>
    </li>
  );
});

export const NestedList: FunctionComponent<INestedListProps> = forwardRef<
  HTMLUListElement,
  INestedListProps
>(function NestedList(props, ref) {
  const { text, children, collapsible = false, titleType = "heading" } = props;

  const [isCollapsed, setIsCollapsed] = useState<boolean>(!collapsible);

  return (
    <>
      {titleType == "heading" && (
        <div
          className="flex items-center text-slate-500 my-4 mb-3 cursor-pointer"
          onClick={() => {
            if (collapsible) {
              setIsCollapsed(!isCollapsed);
            }
          }}
        >
          <span className="mr-3">
            {!isCollapsed && <FiChevronDown />}
            {isCollapsed && <FiChevronRight />}
          </span>
          <span className="text-sm mr-3">{text}</span>
          <div className="flex-1">
            <hr />
          </div>
        </div>
      )}
      {titleType == "item" && (
        <ListItem
          text={text}
          onClick={() => {
            if (collapsible) {
              setIsCollapsed(!isCollapsed);
            }
          }}
        />
      )}
      {!isCollapsed && <ul ref={ref}>{children}</ul>}
    </>
  );
});
