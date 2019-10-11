import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextPage } from 'next';
import React, { Children } from 'react';
import { ActiveLinkProps } from '../types';

const ActiveLink: NextPage<ActiveLinkProps> = ({ children, activeClassName, ...props }) => {
    const { pathname }: { pathname: string } = useRouter();
    const child: any = Children.only(children);

    const className: string =
        pathname === props.href
            ? `${child.props.className} ${activeClassName}`
            : child.props.className;

    return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
}

export default ActiveLink;