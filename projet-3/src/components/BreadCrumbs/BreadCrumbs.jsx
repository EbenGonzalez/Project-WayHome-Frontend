import { cloneElement } from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import Box from '@mui/material/Box'

import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = ({ parts }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {parts.map((part, index) => (
        <Link key={index} to={part.path} style={{ textDecoration: 'none' }}>
          {part.icon && cloneElement(part.icon, { sx: { mr: 0.5 } })}
          {part.label}
        </Link>
      ))}
    </Breadcrumbs>
  )
}

const getPathParts = () => {
  const pathnames = location.pathname.split('/').filter((page) => page !== '')
  const parts = pathnames.map((part, index) => {
    const isLast = index === pathnames.length - 1
    const path = `/${pathnames.slice(0, index + 1).join('/')}`
    return {
      label: part,
      path: isLast ? null : path,
    }
  })
  return [{ label: <HomeIcon color='primary' />, path: '/' }, ...parts]
}

const BasicBreadcrumbs = () => {
  const location = useLocation()

  const breadcrumbParts = getPathParts()

  return (
    <Box m={2} role="presentation" sx={{ position: 'fixed', top: '64px', left: 0 }}>
      <Breadcrumb parts={breadcrumbParts} />
    </Box>
  )
}

export default BasicBreadcrumbs