import { NavLink, NavLinkProps } from "react-router";

export default ({ children, ...props }: NavLinkProps) => <NavLink {...props}
    className={ props.className ? props.className : "block text-blue-600"}>
    {children}
</NavLink>