import { useState } from "react";
import { NodeProps, Position, useNodeId } from "reactflow";
import CustomHandle from "../handler/test";

export const ConditionalNode: React.FC<NodeProps> = ({ data, xPos, yPos }) => {
  const [selected, setValueSelected] = useState({} as any);
  const [open, setOpen] = useState(false);
  const nodeId = useNodeId();
  console.log("x - ", xPos, ", y -", yPos);
  return (
    <>
      <CustomHandle
        type="target"
        position={Position.Top}
        connectionSize={1}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={true}
        isConnectableStart={false}
      />
      <div className="h-10 w-44 border-white bg-indigo-400 rounded-lg shadow-sm hover:shadow-md">
        <div className="self-center p-2 align-middle text-center">
          If Condition
        </div>
      </div>

      <CustomHandle
        id="yes"
        type="source"
        position={Position.Left}
        connectionSize={1}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={true}
        isConnectableEnd={false}
      />

      <CustomHandle
        id="no"
        type="source"
        position={Position.Right}
        connectionSize={1}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={true}
        isConnectableEnd={false}
      />
    </>
  );
};
