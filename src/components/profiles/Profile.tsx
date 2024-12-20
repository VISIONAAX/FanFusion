import { Capacitor } from '@capacitor/core';
import React from 'react';
import { createPortal } from 'react-dom';

import Menu from '@/components/menu/Menu';
import NextImage from '@/components/NextImage';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Profile = () => {
  return (
    <>
      {Capacitor.getPlatform() == 'ios' ? (
        <div style={{ paddingTop: 'calc(2px + env(safe-area-inset-top))' }}>
          <div className='absolute mt-6 flex flex-col items-center gap-3 mobile-demo:inset-center'>
            <NextImage
              src='/images/demo-profile.png'
              alt='Image placeholder'
              className='relative h-32 w-32 rounded-full border-4 border-primary-500'
              imgClassName='object-cover rounded-full'
              fill
            />
            <span className='block'>.Dev</span>
            <span className='text-gradient-primary block'>3950 pts.</span>
            <ConnectButton /> 
          </div>
        </div>
      ) : (
        <div className='absolute mt-6 flex flex-col items-center gap-3 mobile-demo:inset-center'>
          <NextImage
            src='/images/demo-profile.png'
            alt='Image placeholder'
            className='relative h-32 w-32 rounded-full border-4 border-primary-500'
            imgClassName='object-cover rounded-full'
            fill
          />
          <span className='block'>.Dev</span>
          <span className='text-gradient-primary block'>3950 pts.</span>
          <ConnectButton showBalance={false} />
          <div className='mx-auto my-10 overflow-hidden rounded-2xl  sm:w-[26rem] sm:max-w-lg'>
            <div className='relative bg-[#17FE17] py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white'>
              Upload Files
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-0 right-0 m-5 h-6 w-6 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </div>
            <div className='space-y-4 px-8 py-10'>
              <div className='flex flex-col items-center justify-center rounded-lg border-4 border-dashed px-4 py-10'>
                <svg
                  className='h-14 -rotate-90'
                  version='1.1'
                  id='Layer_1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 512 512'
                  enable-background='new 0 0 512 512'
                >
                  <linearGradient
                    id='SVGID_1_'
                    gradientUnits='userSpaceOnUse'
                    x1='326.4185'
                    y1='382.5204'
                    x2='326.4185'
                    y2='128.8734'
                    className='gradient-element'
                  >
                    <stop offset='0' className='primary-color-gradient'></stop>
                    <stop
                      offset='1'
                      className='secondary-color-gradient'
                    ></stop>
                  </linearGradient>
                  <path
                    fill='url(#SVGID_1_)'
                    d='M466.1,249.8l-122-122c-4.6-4.6-12.4-1.3-12.4,5.1v95.2c0,29.3-23.8,53.1-53.1,53.1H193	c-4.9,0-8.8,4-8.8,8.8v16.8c0,4.8,3.9,8.7,8.7,8.7h91.7c4.8,0,8.7,3.9,8.7,8.7v89.6c0,7.8,9.4,11.6,14.9,6.2l157.9-157.9	C469.5,258.8,469.5,253.2,466.1,249.8z'
                  ></path>
                  <path d='M302,430.6c-2.2,0-4.3-0.4-6.4-1.3c-6.3-2.6-10.3-8.7-10.3-15.4v-89.6c0-0.4-0.3-0.7-0.7-0.7H123.1	c-9.2,0-16.7-7.5-16.7-16.7v-25.7c0-4.4,3.6-8,8-8s8,3.6,8,8v25.7c0,0.4,0.3,0.7,0.7,0.7h161.5c9.2,0,16.7,7.5,16.7,16.7v89.6	c0,0.2,0,0.5,0.4,0.7c0.4,0.2,0.6,0,0.8-0.2l157.9-157.9c0.3-0.3,0.3-0.7,0-1L302.5,97.6c-0.1-0.1-0.3-0.3-0.8-0.2	c-0.4,0.2-0.4,0.5-0.4,0.7v89.6c0,9.2-7.5,16.7-16.7,16.7h-197c-4.4,0-8-3.6-8-8s3.6-8,8-8h197c0.4,0,0.7-0.3,0.7-0.7V98.1	c0-6.8,4-12.8,10.3-15.4c6.3-2.6,13.4-1.2,18.2,3.6l157.9,157.9c6.5,6.5,6.5,17.1,0,23.6L313.8,425.7	C310.6,428.9,306.4,430.6,302,430.6z'></path>
                  <path
                    fill='#0396FF'
                    className='secondary-color'
                    d='M29.6,128.1V25.5h21.8v102.6H29.6z M51.4,249V146.4H29.6V249H51.4z'
                  ></path>
                  <path
                    fill='#ABDCFF'
                    className='primary-color'
                    d='M484.2,374.2v102.6h-91.4L484.2,374.2z'
                  ></path>
                  <path d='M35.4,281.3c0-4.4,3.6-8,8-8h112.8c4.4,0,8,3.6,8,8s-3.6,8-8,8H43.4C38.9,289.3,35.4,285.7,35.4,281.3z M235.4,372.2	c4.4,0,8-3.6,8-8s-3.6-8-8-8H43.4c-4.4,0-8,3.6-8,8s3.6,8,8,8H235.4z M417.3,45.3c-4.4,0-8,3.6-8,8c0,11.4-9.3,20.8-20.8,20.8	c-4.4,0-8,3.6-8,8s3.6,8,8,8c20.3,0,36.8-16.5,36.8-36.8C425.3,48.8,421.7,45.3,417.3,45.3z M467.3,90c4.4,0,8-3.6,8-8s-3.6-8-8-8	c-11.4,0-20.8-9.3-20.8-20.8c0-4.4-3.6-8-8-8s-8,3.6-8,8C430.5,73.5,447,90,467.3,90z M467.3,95.3c-20.3,0-36.8,16.5-36.8,36.8	c0,4.4,3.6,8,8,8s8-3.6,8-8c0-11.4,9.3-20.8,20.8-20.8c4.4,0,8-3.6,8-8S471.7,95.3,467.3,95.3z M388.5,95.3c-4.4,0-8,3.6-8,8	s3.6,8,8,8c11.4,0,20.8,9.3,20.8,20.8c0,4.4,3.6,8,8,8s8-3.6,8-8C425.3,111.7,408.8,95.3,388.5,95.3z M132.4,105.4c0,4.4,3.6,8,8,8	h112.8c4.4,0,8-3.6,8-8s-3.6-8-8-8H140.4C136,97.4,132.4,101,132.4,105.4z M261.2,154c0,5-4.1,9-9,9s-9-4.1-9-9s4.1-9,9-9	S261.2,149.1,261.2,154z M222.2,145c5,0,9,4.1,9,9s-4.1,9-9,9s-9-4.1-9-9S217.2,145,222.2,145z M192.2,145c5,0,9,4.1,9,9s-4.1,9-9,9	s-9-4.1-9-9S187.2,145,192.2,145z M95,452.9c0,14.6-11.8,26.4-26.4,26.4s-26.4-11.8-26.4-26.4s11.8-26.4,26.4-26.4	S95,438.3,95,452.9z M79,452.9c0-5.7-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4S79,458.6,79,452.9z M353.7,459.9	H240.8c-4.4,0-8,3.6-8,8s3.6,8,8,8h112.8c4.4,0,8-3.6,8-8S358.1,459.9,353.7,459.9z M92.7,52.1h112.8c4.4,0,8-3.6,8-8s-3.6-8-8-8	H92.7c-4.4,0-8,3.6-8,8S88.2,52.1,92.7,52.1z'></path>
                </svg>

                <p className='mt-4 text-center text-xl font-medium text-gray-300'>
                  Drop Files here or
                  <label className='mt-2 block rounded-full border bg-white px-4 py-0.5 font-normal text-blue-500 shadow shadow-blue-100 hover:bg-blue-50'>
                    <input className='hidden' type='file' name='file' id='' />
                    browse
                  </label>
                </p>
              </div>

              <button className='mt-4 rounded-full bg-blue-600 px-10 py-2 font-semibold text-white'>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {createPortal(<Menu />, document.body)}
    </>
  );
};

export default Profile;
