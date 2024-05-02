import { useCallback } from "react";
import LiveCursors from "./cursor/LiveCursors"
import { useMyPresence, useOthers } from "@/liveblocks.config";

const Live = () => {
    const others = useOthers();
    const [{cursor }, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((event:React.PointerEvent) => {

    }, [])
  return (
    <div>
      <LiveCursors others={others} />
    </div>
  )
}

export default Live
