import { Calendar } from '@lib/components/ui/calendar.tsx';
import { SidebarGroup, SidebarGroupContent } from '@lib/components/ui/sidebar.tsx';

export function DatePicker() {
  return (
    <SidebarGroup className='px-0'>
      <SidebarGroupContent>
        <Calendar className='[&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]' />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
