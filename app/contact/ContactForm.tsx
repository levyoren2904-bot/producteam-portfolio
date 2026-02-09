'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  'Command & Control System',
  'Defense Platform',
  'Infrastructure Control',
  'Enterprise Application',
  'Design System',
  'Other',
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-subtle"
          >
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className={cn(
              'w-full rounded border bg-surface px-4 py-3 text-text',
              'transition-colors duration-200',
              'placeholder:text-text-subtle',
              'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
              errors.name ? 'border-red-500' : 'border-border'
            )}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-subtle"
          >
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={cn(
              'w-full rounded border bg-surface px-4 py-3 text-text',
              'transition-colors duration-200',
              'placeholder:text-text-subtle',
              'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
              errors.email ? 'border-red-500' : 'border-border'
            )}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-subtle"
        >
          Company / Organization
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className={cn(
            'w-full rounded border border-border bg-surface px-4 py-3 text-text',
            'transition-colors duration-200',
            'placeholder:text-text-subtle',
            'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
          )}
          placeholder="Acme Defense Systems"
        />
      </div>

      {/* Project Type Field */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-subtle"
        >
          Project Type *
        </label>
        <select
          {...register('projectType')}
          id="projectType"
          className={cn(
            'w-full rounded border bg-surface px-4 py-3 text-text',
            'transition-colors duration-200',
            'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
            errors.projectType ? 'border-red-500' : 'border-border'
          )}
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-subtle"
        >
          Tell us about your project *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className={cn(
            'w-full resize-none rounded border bg-surface px-4 py-3 text-text',
            'transition-colors duration-200',
            'placeholder:text-text-subtle',
            'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
            errors.message ? 'border-red-500' : 'border-border'
          )}
          placeholder="Describe your project, challenges, timeline, and any specific requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-500"
            >
              Message sent successfully!
            </motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-500"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
