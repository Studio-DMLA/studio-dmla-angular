import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
} from '@angular/animations';

export const animateInOut = animation([
    transition(':enter', [
        style({ opacity: 0 }),
        animate('{{ time }}', style({ opacity: 1 })),]),  // alias for void => *
    transition(':leave', [
        animate('{{ time }}', style({ opacity: 0 })),]),  // alias for * => void

]);
