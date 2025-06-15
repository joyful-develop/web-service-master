import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@lib/components/ui/breadcrumb.tsx';
import { Separator } from '@lib/components/ui/separator.tsx';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@lib/components/ui/sidebar.tsx';
import { SidebarLeft } from '@widgets/layout/app-sidebar.tsx';
import { SidebarRight } from '@widgets/layout/app-sidebar2.tsx';
import { SiteHeader } from '@widgets/layout/header/index.tsx';

export const iframeHeight = '800px';

export const description = 'A sidebar with a header and a search form.';

export default function Page() {
  return (
    <div className='[--header-height:calc(--spacing(14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <SidebarLeft />
          <SidebarInset>
            <header className='bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2'>
              <div className='flex flex-1 items-center gap-2 px-3'>
                <SidebarTrigger />
                <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbPage className='line-clamp-1'>Project Management & Task Tracking</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className='flex flex-1 flex-col gap-4 p-4'>
              <div className='bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl' />
              <div className='bg-muted/50 mx-auto h-[100vh] w-full max-w-3xl rounded-xl' />
            </div>
          </SidebarInset>
          <SidebarRight />
        </div>
        <SiteHeader />
      </SidebarProvider>
    </div>
  );
}
