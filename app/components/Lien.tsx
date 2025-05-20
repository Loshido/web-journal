import { NavLink, NavLinkProps } from "react-router";

export default ({ children, ...props }: NavLinkProps) => <NavLink {...props}
    className={ props.className ? props.className : "block w-fit px-3 py-1 text-black relative group isolate"}>
    <>
        <div
            className="absolute top-0 left-0 w-0 h-full transition-all
            bg-black/10 group-hover:w-full"/>
        {children}
    </>
</NavLink>