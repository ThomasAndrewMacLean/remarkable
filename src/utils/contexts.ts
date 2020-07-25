import { createContext } from 'react';
import { TranslationsType, SEOType, ImagesType,ExtraContextType } from '../types';

export const TranslationContext = createContext<TranslationsType[]>([]);
export const PictureContext = createContext<ImagesType[]>([]);
export const SEOContext = createContext<SEOType[]>([]);
export const ExtraContext = createContext<ExtraContextType[]>([])