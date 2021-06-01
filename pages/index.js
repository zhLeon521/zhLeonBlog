/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-28 11:49:21
 * @LastEditTime: 2021-06-01 20:15:06
 * @FilePath: \zhLeonBlog\pages\index.js
 */
import SelectorIcon from 'heroicons/outline/selector.svg';
import DotsHorizontal from 'heroicons/solid/dots-horizontal.svg'
import CogIcon from 'heroicons/outline/cog.svg'
import PlusIcon from 'heroicons/outline/plus.svg'
import Link from 'next/link';
import { useState } from 'react'

  function VercelLogo({ className }) {
    return (
      <svg className={className} viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="black" />
      </svg>
    )
  }


function Avatar({ src, alt = ' ' }) {
  return (
    <img
      className="h-8 w-8 rounded-full border border-gray-200"
      src={src}
      alt={alt} />
  )
}


function ProjectCard() {
  return (
    <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">zhLeon521's Blog</h3>
          <a href="#"
            className="border border-gray-300 rounded px-5 py-1.5 font-medium text-sm leading-5 text-gray-600 hover:border-black hover:text-black hover:font-medium transition ease-in-out duration-200" >
            Visit
            </a>
        </div>
        {/* 小绿点哪个部分 */}
        <div aria-label="Production deployment" className="flex items-center space-x-3 ">
          <Link href="#">
            <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
              <span aria-hidden
                className="mt-px inline-block h-2.5 w-2.5 rounded-full bg-green-300"></span>
              <span>zhleon521Blueheart.com</span>
            </a>
          </Link>
          <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-xs leading-4 font-medium ">
            Production</span>
          <span className="text-sm leading-4 text-gray-400">
            <time dateTime="2020-11-12">200d</time>
          </span>
        </div>

        <div aria-label="Latest deployment" className="flex items-center space-x-3 ">
          <Link href="#">
            <a className="inline-flex items-center space-x-2 text-sm leading-5 font-medium">
              <span aria-hidden
                className="mt-px inline-block h-2.5 w-2.5 rounded-full bg-green-300"></span>
              <span>zhLeon521's Blog.dev.now.sh</span>
            </a>
          </Link>
          <span className="inline-flex rounded-full bg-gray-50 border border-gray-200 px-1.5 py-px text-xs leading-4 font-medium ">
            Latest</span>
          <span className="text-sm leading-4 text-gray-400">
            <time dateTime="2021-5-31">1d</time>
          </span>
        </div>


      </div>

      <div className="px-6 py-3">
        <Link href="https://github.com/zhLeon521" >
          <a target="_blank" className="flex inline-flex items-center space-x-2 text-sm leading-5 font-medium text-gray-400">
            <img className="h-4 w-4" src="/github.svg" alt="githubLogo" />
            <span>zhLeon521/zhLeon521's Blog</span>
          </a>
        </Link>
      </div>
    </div>
  )
}


function ActivityFeedback({ who = "zhLeon", doing = "If it hurts, do it more often" }) {
  return (
    <div className="flex items-center justify-between space-x-4 ">
      <div className="flex items-center space-x-4 text-sm leading-5">
        <Avatar src="/avatar.svg" alt="" />
        <span className="text-gray-500">
          <Link href="#"><a className="text-gray-600 hover:underline">{who}</a>
          </Link>{' '}{doing}
        </span>
      </div>
      <div className="text-sm leading-5 text-gray-400">
        <time dateTime="2021-5-15" >16d</time>
      </div>
    </div>
  )
}


function AccountSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <span className="inline-flex items-center space-x-2 " >
        <Link href="#">
          <a className="inline-flex items-center space-x-2">
            <span>
              <Avatar src="/avatar.svg" alt="" />
            </span>
            <span className="text-sm text-black-300 font-semibold antialiased">Blueheart</span>
          </a>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center border rounded border-transparent p-0.6 hover:border-gray-200 hover:boder-gray-50 transition ease-in-out duration-200">
          <SelectorIcon className="h-5 w-5 text-gray-300 " />
        </button>
      </ span>
      {isOpen && (

        <div className="absolute w-56 rounded-md divide-y divide-gray-200 bg-white shadow-lg overflow-hidden">
          <div className="py-2">
            <div className="pt-3 px-4 pb-2 text-xs leading-5 uppercase font-medium tracking-wide text-gray-700">
              Personal account
          </div>
            <ul>
              <li className="px-4 py-2 bg-gray-50">
                <div className="flex items-center justify-between space-x-4">
                  <Link href="#">
                    <a className="flex items-center space-x-3 text-sm text-gray-500 hover:text-black leading-5">
                      <img className="h-5 w-5 rounded-full" src="/Avatar.svg" />
                      <span>Blueheart</span>
                    </a>
                  </Link>
                  <div>
                    <Link href="#">
                      <a >
                        <CogIcon className="h-5 w-5 text-gray-400" />
                      </a>
                    </Link>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div className="py-2">
            <Link href="#">
              <a className="px-4 flex items-center justify-between text-sm ">
                <span className="text-gray-500 hover:text-black">Create a Team</span>
                <PlusIcon className="h-6 w-6 text-gray-500 hover:text-black" />
              </a>
            </Link>
          </div>

        </div>
      )

      }




    </div >



  )
}

export default function Home() {
  return (
    <div>
      {/* 最顶端 */}
      < div className="bg-white">
        <header className="border-b border-gray-200 space-y-2">
          <nav className="max-w-5xl mx-auto px-6 flex justify-between items-center pt-4">
            {/* 最上面导航，左侧 */}
            <div className="flex items-center space-x-2">
              <Link href="#">
                <a>
                  <VercelLogo className="h-6" />
                </a>
              </Link>

              <span>
                <svg
                  className="h-8 w-8 text-gray-300"
                  viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" >
                  <path d="M16.88 3.549L7.12 20.451"></path>
                </svg>
              </span>
              {/* 最上面logo + 姓名文字 */}

              <AccountSwitcher />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-5">
                <button type='button' className="border border-gray-200 rounded px-3 py-1.5 text-sm leading-5 text-gray-500 hover:border-black transition ease-in-out duration-200" >
                  Feedback
                </button>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-200">Blog</a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-200">Support</a>
                </Link>
                <Link href="#">
                  <a className="inline-block text-sm leading-5 text-gray-500 hover:text-black transition ease-in-out duration-200">Docs</a>
                </Link>
              </div>
              <button type="button">
                <DotsHorizontal className="h-5 w-5 text-gray-400" />
              </button>
              <button type="button">
                <Avatar src="/avatar.svg" alt="" />
              </button>
            </div>
          </nav>
          {/* 第二个导航条开始 */}
          <div className="max-w-5xl mx-auto px-6">
            <nav className="-mb-px flex space-x-5 text-sm leading-5">
              <Link href="#">
                <a className="border-b-2 border-black px-0.5 py-3 text-black ">Overview</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Projects</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Integrations</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Activity</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Domains</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Usage</a>
              </Link>
              <Link href="#">
                <a className="border-b-2 border-transparent px-0.5 py-3 text-gray-500 hover:text-black transition ease-in-out duration-200">Settings</a>
              </Link>
            </nav>
          </div>
        </header >
        {/* 最上面导航部分结束 */}

        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 pt-14 pb-28">
          {/* 左边 */}
          <div className="flex space-x-8">
            {/* 头像 */}
            <div>
              <img className="h-24 w-24 rounded-full" src="/Avatar.svg" />
            </div>
            <div className="flex flex-col justify-between p-1 space-y-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-4xl leading-10 font-bold">Blueheart</h1>
                <span className="mt-1 inline-flex rounded-full bg-gray-50 border border-gray-200 text-xs leading-4 px-2 py-0.5 font-medium text-black uppercase tracking-wide">
                  hobby</span>
              </div>
              <div >
                <dl>
                  <Link href="https://github.com/zhLeon521" >
                    <a target="_blank" className="flex items-center justify-items-start space-x-2 text-sm leading-5 font-bold text-gray-500">
                      <img className="h-4 w-4" src="/github.svg" alt="githubLogo" />
                      <span>zhLeon521</span>
                    </a>
                  </Link>

                  <dd className="mt-px flex items-center justify-items-start space-x-1.5 text-xs leading-5 font-bold text-black uppercase tracking-wide">
                    <span>🤣</span>
                    <span>FullStack Developer</span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          {/* 右边 */}
          <div className="grid grid-cols-2 gap-x-7">
            <Link href="#">
              <a className="inline-flex justify-between rounded border border-gray-200  bg-white px-6 py-3 text-sm leading-5 font-semibold text-gray-500 hover:border-black hover:text-black transition ease-in-out duration-150">
                Quick View</a>
            </Link>
            <Link href="#">
              <a className="inline-flex items-center justify-between rounded border border-transparent bg-black px-7 py-3 text-sm leading-5 font-medium text-white hover:bg-white hover:border-black hover:text-black transition ease-in-out duration-150">
                Enter Blog</a>
            </Link>
          </div>

        </div>
      </ div >

      {/* 下面的主页面 */}

      <div className="bg-gray-50 border-t border-gray-200 pb-6">
        <main className="max-w-5xl mx-auto px-6 grid grid-cols-12 gap-20">
          <div className="col-span-7 -mt-10">
            <h2 className="sr-only">Recent Projects</h2>
            <div className="space-y-6">
              <ul className="space-y-12">
                <li>
                  <ProjectCard />
                </li>
                <li>
                  <ProjectCard />
                </li>
                <li>
                  <ProjectCard />
                </li>
                <li>
                  <ProjectCard />
                </li>
              </ul>
              <div>
                <Link href="#">
                  <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                    View All projects
                  </a>
                </Link>
              </div>
            </div>
          </div>



          <div className="col-span-5 -mt-10 pt-3">
            <h2 className="text-base leading-5 font-bold">Recent Activity</h2>
            <div className="space-y-6">
              <ul className="pt-5 divide-y divide-gray-200  border-b border-gray-200">
                <li className="py-2">
                  <ActivityFeedback who="Wang Dazhu" doing="The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time." />
                </li>
                <li className="py-2">
                  <ActivityFeedback who="You" doing="Any fool can write code that a computer can understand. Good programmers write code that humans can understand." />
                </li>
                <li className="py-2">
                  <ActivityFeedback doing="Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." />
                </li>
                <li className="py-2">
                  <ActivityFeedback doing="Premature optimization is the root of all evil." />
                </li>
                <li className="py-2">
                  <ActivityFeedback />
                </li>
                <li className="py-2">
                  <ActivityFeedback who="Wang Dazhu" doing="The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time." />
                </li>
                <li className="py-2">
                  <ActivityFeedback who="You" doing="Any fool can write code that a computer can understand. Good programmers write code that humans can understand." />
                </li>
                <li className="py-2">
                  <ActivityFeedback doing="Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." />
                </li>
                <li className="py-2">
                  <ActivityFeedback doing="Premature optimization is the root of all evil." />
                </li>
                <li className="py-2">
                  <ActivityFeedback />
                </li>
              </ul>
              <div>
                <Link href="#">
                  <a className="text-sm leading-5 font-bold text-blue-500 hover:underline">
                    View All Activities
                    </a>
                </Link>
              </div>
            </div>

          </div>

        </main>
      </div >
    </div >


  )

}
