import React from "react";
import { Guard } from "../../guards/Guards";

type RouterCustomTypes = {
    component: React.ReactNode,
    guard?: boolean[];
}
export function GuardedRoute({ component, guard }: RouterCustomTypes) {
    return (
        <Guard bool={guard!} component={component} />
    )
}