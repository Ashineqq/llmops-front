import type { User } from '@/store/atoms';

import request from './request';

export interface LoginResponse {
  token: string;
  user: User;
}

export function getProjects(): Promise<unknown[]> {
  return request.get('/projects');
}

export function login(data: { username: string; password: string }): Promise<LoginResponse> {
  return request.post('/auth/login', data);
}
