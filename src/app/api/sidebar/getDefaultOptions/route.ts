import { NextResponse } from 'next/server';
import { getDefaultSidebarOptions } from '@/lib/utils/sidebar/sidebar.utils';

export async function GET() {
  try {
    const data = await getDefaultSidebarOptions();
    return NextResponse.json(data);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ message: msg }, { status: 500 });
  }
}
