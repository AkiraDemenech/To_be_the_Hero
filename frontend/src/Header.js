import React from 'react';

export default function Header (properties) {
    return (
        <h1>
            Be the Hero, {properties.children}
        </h1>
    );
}