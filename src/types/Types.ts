import { ReactNode } from "react";

export type childProps = {
  children: ReactNode;
  className?:string
};

export type btnProps = {
    width?:number
    color:string
    addClass?:string
}

export type inputProps = {
  width?:number
  height?:number
  rightIcon?:ReactNode
  error?:string
}

export type iconProps = {
  width:number
  height:number
  color?:string
}
