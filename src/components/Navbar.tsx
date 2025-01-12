import Link from "next/link";
import MaxwidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const Navbar = () => {
    const user = undefined;
    const isAdmin = false
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxwidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            {user ? (
              <>
                <LoginLink
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign out
                </LoginLink>
                {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null}
                <LoginLink
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Create case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </LoginLink>
              </>
            ) : (
              <>
                <LoginLink
                  href='/api/auth/register'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign up
                </LoginLink>

                <LoginLink
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Login
                </LoginLink>

                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                <LoginLink
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Create case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </LoginLink>
              </>
            )}
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
};

export default Navbar;

