
import React from "react";
import { Card } from 'antd';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const navigationItems = [
  { key: '1', title: 'On Arrival Visa', text: 'Text 1', id: 'on-arrival-visa' },
  { key: '2', title: 'Currency Exchange1', text: 'Text 2', id: 'currency-exchange1', ref:'ref1'},
  { key: '3', title: 'Currency Exchange2', text: 'Text 2', id: 'currency-exchange2' },
  { key: '2', title: 'Currency Exchange3', text: 'Text 2', id: 'currency-exchange3' },
  { key: '2', title: 'Currency Exchange4', text: 'Text 2', id: 'currency-exchange4', ref:'ref2' },
  { key: '2', title: 'Currency Exchange5', text: 'Text 2', id: 'currency-exchange5' },
  { key: '2', title: 'Currency Exchange6', text: 'Text 2', id: 'currency-exchange6' },
  { key: '2', title: 'Currency Exchange7', text: 'Text 2', id: 'currency-exchange7' },
  { key: '2', title: 'Currency Exchange8', text: 'Text 2', id: 'currency-exchange8ref', ref:'ref1' },
  { key: '3', title: 'SIM Card', text: 'Text 3', id: 'sim' },
  {key:'4', title:'Travel to hotel', text:'text4', id:'travel-to-hotel'}
];

const BodySection = () => {
  //found better way
//   const [activeCard, setActiveCard] = useState(null);
//   const [onarrivalvisa, inView1] = useInView({ triggerOnce: false });
//   const [ref2, inView2] = useInView({ triggerOnce: false });
//   // refs to see screen ma kun kun card dekhiyexa

//   useEffect(() => {
//     if (inView1) setActiveCard('on-arrival-visa');
//     else if (inView2) setActiveCard('currency-exchange');
//     // dekhiyeko card lai active set garni
//   }, [inView1, inView2]);

  return (
    <div>
      {navigationItems.map(item => (
        <Card key={item.key} title={item.title} id={item.id} style={{ marginBottom: '16px' }}>
          {item.text}
        </Card>
      ))}
    </div>
  );
};

export default BodySection;

