'use client';

import { Dialog, Transition} from '@headlessui/react';
import { Fragment } from 'react';
import { X} from 'lucide-react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SidebarProps
