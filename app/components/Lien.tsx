import { NavLink, NavLinkProps } from "react-router";

export default ({ children, ...props }: NavLinkProps) => <NavLink {...props}
    className={"text-blue-600 block " + props.className}>
    {children}
</NavLink>