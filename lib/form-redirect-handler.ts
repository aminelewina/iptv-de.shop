/**
 * Form redirect handler for plan pages
 * Handles form submission and redirects to tracking URL with encoded parameters
 */

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  subsource: string;
}

interface FormFieldMapping {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  subsource?: string;
}

const REDIRECT_BASE_URL = 'https://t.trklinkx.com/click?pid=3137&offer_id=10622';

/**
 * Initialize form redirect handlers
 * @param formSelectors - Array of form selectors or a single selector
 * @param fieldMapping - Optional custom field name mapping
 */
export function initializeFormRedirect(
  formSelectors: string | string[],
  fieldMapping?: FormFieldMapping
) {
  // Convert single selector to array
  const selectors = Array.isArray(formSelectors) ? formSelectors : [formSelectors];

  // Default field mapping
  const defaultMapping: FormFieldMapping = {
    name: 'name',
    surname: 'surname',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    subsource: 'subsource'
  };

  const mapping = { ...defaultMapping, ...fieldMapping };

  // Attach handlers to all forms
  selectors.forEach(selector => {
    const forms = document.querySelectorAll<HTMLFormElement>(selector);
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(form, mapping);
      });
    });
  });
}

/**
 * Handle form submission and redirect
 */
function handleFormSubmit(form: HTMLFormElement, mapping: FormFieldMapping) {
  // Extract form data
  const formData = extractFormData(form, mapping);

  // Validate required fields
  if (!validateFormData(formData)) {
    console.error('Missing required form fields');
    return;
  }

  // Build redirect URL
  const redirectUrl = buildRedirectUrl(formData);

  // Redirect to tracking URL
  window.location.href = redirectUrl;
}

/**
 * Extract data from form fields
 */
function extractFormData(form: HTMLFormElement, mapping: FormFieldMapping): FormData {
  const getFieldValue = (fieldName: string | undefined): string => {
    if (!fieldName) return '';
    
    const field = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      `[name="${fieldName}"], #${fieldName}, .${fieldName}`
    );
    
    return field?.value?.trim() || '';
  };

  return {
    name: getFieldValue(mapping.name),
    surname: getFieldValue(mapping.surname),
    email: getFieldValue(mapping.email),
    phone: getFieldValue(mapping.phone),
    address: getFieldValue(mapping.address),
    city: getFieldValue(mapping.city),
    subsource: getFieldValue(mapping.subsource)
  };
}

/**
 * Validate that all required fields have values
 */
function validateFormData(data: FormData): boolean {
  return !!(
    data.name &&
    data.surname &&
    data.email &&
    data.phone &&
    data.address &&
    data.city &&
    data.subsource
  );
}

/**
 * Build the redirect URL with encoded parameters
 */
function buildRedirectUrl(data: FormData): string {
  const params = new URLSearchParams({
    sub3: data.subsource,
    sub9: data.name,
    sub10: data.surname,
    sub11: data.email,
    sub12: data.phone,
    sub13: data.address,
    sub15: data.city
  });

  return `${REDIRECT_BASE_URL}&${params.toString()}`;
}

/**
 * Hook for React components
 */
export function useFormRedirect(fieldMapping?: FormFieldMapping) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const mapping = { 
      name: 'name',
      surname: 'surname',
      email: 'email',
      phone: 'phone',
      address: 'address',
      city: 'city',
      subsource: 'subsource',
      ...fieldMapping 
    };

    handleFormSubmit(form, mapping);
  };

  return { handleSubmit };
}
