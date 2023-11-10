export interface Ibutton {
    title: string;
    variant?:  'primary' | 'secondary';
    className?: string;
    onClick ?: () => void;
    type?: string;
}