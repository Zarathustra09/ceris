export const cerisMotion = {
    pageEnter: {
        duration: 0.5,
        ease: 'easeOut',
    },
    heroHeading: {
        duration: 0.65,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
    },
    heroUnderline: {
        duration: 0.9,
        delay: 0.65,
        ease: 'easeInOut',
    },
    heroCard: {
        duration: 0.55,
        delay: 0.3,
        ease: 'easeOut',
    },
    buttonInteractive: {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
    },
}

export const cerisStyles = {
    heroPrimaryGlow: 'background: oklch(76% 0.18 128 / 0.1);',
    heroSecondaryGlow: 'background: oklch(50% 0.13 152 / 0.08);',
    featureGlow: 'background: oklch(76% 0.18 128 / 0.12);',
    dotGrid: 'background-image: radial-gradient(circle, oklch(76% 0.18 128 / 0.25) 1.5px, transparent 1.5px); background-size: 36px 36px;',
    buttonShadow: 'box-shadow: 0 6px 20px -4px oklch(76% 0.18 128 / 0.4);',
    stickyShadow: 'box-shadow: 0 2px 16px oklch(76% 0.18 128 / 0.06);',
    underlineStroke: 'oklch(76% 0.18 128 / 0.5)',
}

export const amenityAccentClassMap = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    info: 'bg-info/10 text-info',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/12 text-warning',
    'base-content': 'bg-base-200 text-base-content/75',
}

