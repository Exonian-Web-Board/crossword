import React from 'react';

export default function TextRow({
	children,
}: {
	children: JSX.Element[];
}) {
	return <div className="flex my-2">{children}</div>;
}
