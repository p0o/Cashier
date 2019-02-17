/**
 *  This file will provide Data Access helper functions
 *  We keep it separated from utils just to improve the readability of the source directory
 * */

import { WalletCreationPayload } from '../types/Wallet';

export function saveWallet(payload: WalletCreationPayload): Promise<void> {
  // TODO: handle storage for firefox and chrome
  // TODO: handle differently if the app is opened in storybook
  console.log('Wallet saved ', payload);
  return Promise.resolve();
}
