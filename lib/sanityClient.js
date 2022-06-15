import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'zsom0xs9',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
        'skbUlBoC0I5dI6eW3QeSB6RfWp0bU137e1YwLYm7BOxjuGxL0aGIgwWBLLjqvVLu6lxDrUhYW8407j51kBUV9ahLmq5UvpRnHSGzs94tXiNZ2Jdai9RctQmKvTqYQVvczDfOUnlai6XgS2S6I9AmHKIR9gXS1ixb130To98plqTHplcRQHlw',
    useCdn: false,
})