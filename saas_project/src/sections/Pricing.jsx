import React, { useState} from 'react'
import { Element } from 'react-scroll'
import { clsx } from "clsx";

import { plans } from "../constants"

const Pricing = () => {
    const [monthly, setMonthly] = useState(false)
    console.log(monthly)
  return (
    <section>
        <Element name="pricing">
           <div className='container'>
                <div className='max-w-960 pricing-head_before relative max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
                    <h3 className='h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm'>
                        Flexible pricing for the team of all sizes
                    </h3>
                    <div className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]'>
                    <button className={clsx("pricing-head_btn", monthly && "text-p4")}
                                onClick={() => setMonthly(true)}>Monthly</button>
                        <button className={clsx("pricing-head_btn", !monthly && "text-p4")}
                                onClick={() => setMonthly(false)}>Annual</button>
                                <div className={clsx("g4 rounded-14 before:h-full pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500", !monthly && "translate-x-full")}/>
                    </div>
                       <div className='pricing-bg'>
                         <img src="/images/bg-outlines.svg"
                              width={960}
                              height={380}
                              alt="outline"
                              className='relative z-2' />
                            <img src="/images/bg-outlines-fill.png"
                              width={960}
                              height={380}
                              alt="outline"
                              className='absolute inset-0 opacity-5 mix-blend-soft-light' />
                       </div>
                    </div>
                    <div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
                     {plans.map((plan, index) => (
                      <div key={plan.id}
                           className=''>
                       {plan.title}
                      </div>
                     ))}
                    </div>
                </div>
        </Element>
    </section>
  )
}

export default Pricing