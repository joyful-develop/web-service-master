import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@lib/components/ui/breadcrumb.tsx';
import { Separator } from '@lib/components/ui/separator.tsx';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@lib/components/ui/sidebar.tsx';
import { SidebarRight } from '@widgets/layout/app-sidebar2.tsx';
import { SidebarLeft } from '@widgets/layout/app-sidebar3.tsx';
import { SiteHeader } from '@widgets/layout/header/index.tsx';

export const iframeHeight = '800px';

export const description = 'A sidebar with a header and a search form.';

export default function Page() {
  const contentHeight = 'h-[calc(100vh-2px-calc(var(--header-height)*2))]';
  const contentMaxHeight = 'max-h-[calc(100vh-66px-calc(var(--header-height)*2))]';

  return (
    <div className='[--header-height:calc(--spacing(14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <SidebarLeft className={`inset-y-(--header-height) ${contentHeight}`} />
          <SidebarInset>
            <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
              <SidebarTrigger className='-ml-1' />
              <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className='hidden md:block'>
                    <BreadcrumbLink href='#'>Building Your Application</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className='hidden md:block' />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <div className={`${contentMaxHeight} overflow-auto`}>
              <div className='flex flex-1 flex-col gap-4 p-4'>
                <div className='bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl' />
                <div className='bg-muted/50 mx-auto h-[100vh] w-full max-w-3xl rounded-xl' />
              </div>
            </div>
          </SidebarInset>
          <SidebarRight className={`${contentHeight}`} />
        </div>
        <SiteHeader />
      </SidebarProvider>
    </div>
  );
}
