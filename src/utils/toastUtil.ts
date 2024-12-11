import { JSX } from 'react';
import { useToast } from 'react-native-toast-notifications';
import { ToastOptions } from 'react-native-toast-notifications/lib/typescript/toast';

export function useShowToast() {
  const toast = useToast();
  
  return (message: string | JSX.Element, options: ToastOptions) => {
    toast.show(message, {
      type: options?.type || 'normal',
      placement: 'top',
      duration: 3000,
      animationType: 'slide-in',
      style: {
        marginTop: 30,
      },
    });
  };
}
