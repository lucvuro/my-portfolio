import { MainLayout } from '@/layouts'
import { NextPageWithLayout } from '@/next'
import React, { ReactElement, useEffect, useState } from 'react'
import styles from '@/styles/Contact.module.css'
import { Box, Container } from '@mui/system'
import { Alert, Button, Divider, Snackbar, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { LoadingButton } from '@mui/lab'
import Head from 'next/head'
export interface ContactPageProps {}

const Contact: NextPageWithLayout = (props: ContactPageProps) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = async (data: any) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      reset()
      setOpenSuccess(true)
    } catch (err) {
      console.log(err)
      setOpenFail(true)
    }
  }
  const [openSuccess, setOpenSuccess] = useState<boolean>(false)
  const [openFail, setOpenFail] = useState<boolean>(false)
  const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSuccess(false)
  }
  const handleCloseFail = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenFail(false)
  }
  return (
    <>
      <Head>
        <title>Contact | lucvuro.dev</title>
      </Head>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          Sent successfully
        </Alert>
      </Snackbar>
      <Snackbar
        open={openFail}
        autoHideDuration={3000}
        onClose={handleCloseFail}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseFail} severity="error" sx={{ width: '100%' }}>
          Server Error
        </Alert>
      </Snackbar>
      <main className={styles.main}>
        <Container maxWidth="lg">
          <Box className={styles.contactHeader} sx={{ color: 'text.primary' }}>
            <h1 className={styles.contactTitle}>Contact Me</h1>
            <Divider />
          </Box>
          <div className={styles.contactContent}>
            <Box className={styles.contactContentLeft} sx={{ color: 'text.primary' }}>
              <h3 className={styles.contactContentTitle}>Get in touch</h3>
              <p className={styles.contactContentEmail}>
                Email: <a href="mailto:contact@lucvuro.dev">contact@lucvuro.dev</a>
              </p>
              <p className={styles.contactContentDescription}>Feel free to get in touch with me.</p>
            </Box>
            <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.contactFormInfo}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: '*Name is required' }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id={styles.contactFormName}
                      label="Name"
                      InputLabelProps={{ style: { fontFamily: `${styles.contactFormPlacholder}` } }}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                      disabled={isSubmitting}
                      error={!!errors['name']}
                      helperText={errors['name'] ? errors['name'].message?.toString() : ''}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: '*Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: '*Invalid email',
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id={styles.contactFormEmail}
                      label="Email"
                      InputLabelProps={{ style: { fontFamily: `${styles.contactFormPlacholder}` } }}
                      variant="outlined"
                      fullWidth
                      value={value}
                      onChange={onChange}
                      disabled={isSubmitting}
                      error={!!errors['email']}
                      helperText={errors['email'] ? errors['email'].message?.toString() : ''}
                    />
                  )}
                />
              </div>
              <div className={styles.contactFormMessage}>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: '*Message is required' }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id={styles.contactFormMessage}
                      label="Message"
                      InputLabelProps={{ style: { fontFamily: `${styles.contactFormPlacholder}` } }}
                      variant="outlined"
                      multiline
                      rows={5}
                      fullWidth
                      value={value}
                      onChange={onChange}
                      disabled={isSubmitting}
                      error={!!errors['message']}
                      helperText={errors['message'] ? errors['message'].message?.toString() : ''}
                    />
                  )}
                />
              </div>
              <div className={styles.contactFormActions}>
                <LoadingButton loading={isSubmitting} type="submit" variant="contained">
                  Send
                </LoadingButton>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </>
  )
}
Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  )
}
export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Contact
