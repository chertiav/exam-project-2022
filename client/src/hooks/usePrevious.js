import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
	const ref = useRef();
	useEffect(() => {
		ref.prevLateVal = value;
	});
	return ref.prevLateVal;
}