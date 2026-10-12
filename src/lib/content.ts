import { getCollection } from 'astro:content';
import { marked } from 'marked';

const byNavigationOrder = (a: { data: { navigationOrder: number } }, b: { data: { navigationOrder: number } }) =>
  a.data.navigationOrder - b.data.navigationOrder;

export async function getLeistungen() {
  return (await getCollection('leistungen')).sort(byNavigationOrder);
}

export async function getPferde() {
  return (await getCollection('pferde')).sort(byNavigationOrder);
}

export function renderMarkdown(markdown: string | undefined): string {
  return markdown ? marked.parse(markdown, { async: false }) : '';
}
