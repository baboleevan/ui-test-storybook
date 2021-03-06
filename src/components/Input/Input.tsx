import * as React from "react";
import "./Input.scss";
import Icon from "../Icon/Icon";

type InputProps = {
  /** 클래스명 (추가 스타일 지정) */
  className?: string;
  /** placeholder 지정시 사용 Props */
  placeholder?: string;
  /** onChange 함수 지정 */
  onChange?: any;
  /** Input 변경 감지 값 입력 */
  value?: any;
  /** onChange 변경 감지 고유 이름 */
  name?: string;
  /** type 지정 */
  type?: "text" | "password";
  /** Input 컴포넌트 크기 */
  size?: "large" | "small";
  /** 어디서 보여줄지에 대한 항목 default - login */
  view?: "login" | "join" | "search";
  /** 검색의 경우에만 사용자 클릭시 트리거할 이벤트 */
  onClick?: any;
};

/** `Input` 컴포넌트는 사용자의 입력을 받아 Form 처리시 사용  */
export const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  onChange,
  value,
  name,
  type,
  size,
  view,
  onClick,
  ...rest
}: InputProps) => {
  const handleEnter = (e: any) => {
    if (e.charCode === 13) {
      onClick(value);
    }
  };

  return (
    <div className="c-Input">
      <input
        className={`Input ${className} ${size} ${view}`}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        onKeyPress={(e) => {
          view === "search" && handleEnter(e);
        }}
        autoComplete={view === "search" ? "off" : "on"}
        {...rest}
      />
      {view === "search" && <Icon icon="search" />}
    </div>
  );
};

Input.defaultProps = {
  size: "large",
  view: "login",
  type: "text",
};
