import { PanelRight } from 'lucide-react';
import React from "react"
export default function IconBox(onclick) {
  return (
    <div className="w-[24px] h-[24px] flex items-center justify-center">
      <div className="pt-[4px] pl-[2px]">
          <PanelRight className="w-5 h-4  text-[#618666]" onClick={onclick} />      </div>

    </div>
  );
}
