import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextPage } from 'next';
import React, { Children } from 'react';

interface ActiveLinkProps {
    children: any,
    activeClassName: string,
    href: string
    as: string
}

const ActiveLink: NextPage<ActiveLinkProps> = ({ children, activeClassName, ...props }) => {
    const { pathname } = useRouter();
    const child = Children.only(children);

    const className =
        pathname === props.href
            ? `${child.props.className} ${activeClassName}`
            : child.props.className;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
}

export default ActiveLink;