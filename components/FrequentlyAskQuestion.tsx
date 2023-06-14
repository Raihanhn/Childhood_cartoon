import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import React from 'react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis?',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis?',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis?',
      children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis?',
        children: <p>{text}</p>,
      },
      {
        key: '5',
        label: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis?',
        children: <p>{text}</p>,
      },
    
  ];

type Props = {}

const FrequentlyAskQuestion = (props: Props) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
      };

  return (
    <div className = ' bg-white pb-[80px]  ' >
    <div className = " container mx-auto  ">
    <div className = " flex items-center justify-center flex-col ">
    <h1  className = ' text-[32px] font-bold text-[#0E1D34] ' >FREQUENTLY ASKED QUESTIONS</h1>
    <div className = " h-[4px] w-[40px] mt-[8px] bg-[#0E1D34] "></div>
        </div>
        <div className=" mt-[40px] px-[400px] ">
         <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
        </div>
    </div>
  )
}

export default FrequentlyAskQuestion