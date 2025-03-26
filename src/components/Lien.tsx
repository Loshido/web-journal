import { NavLink, NavLinkProps } from "react-router-dom";

export default ({ children, ...props }: NavLinkProps) => <NavLink {...props}
    className={"text-blue-600 block " + props.className}>
    {children}
</NavLink>